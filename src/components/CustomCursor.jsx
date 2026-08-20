import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hoverText, setHoverText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device to disable custom cursor
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const onMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeaveWindow);
    document.addEventListener('mouseenter', onMouseEnterWindow);

    // Smooth movement using requestAnimationFrame (interpolating current cursor pos to mouse pos)
    let animationFrameId;
    const updatePosition = () => {
      const ease = 0.15;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    animationFrameId = requestAnimationFrame(updatePosition);

    // Setup interactive hover listeners
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, select, textarea, .brutalist-card, [data-cursor-text]');
      if (!target) {
        setIsHovering(false);
        setHoverText('');
        setIsInput(false);
        return;
      }

      setIsHovering(true);

      const tagName = target.tagName.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        setIsInput(true);
      } else {
        setIsInput(false);
      }

      const customText = target.getAttribute('data-cursor-text');
      if (customText) {
        setHoverText(customText);
      } else if (tagName === 'a' || tagName === 'button') {
        setHoverText('CLIQUE');
      } else if (target.classList.contains('brutalist-card')) {
        setHoverText('VER');
      } else {
        setHoverText('');
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setHoverText('');
      setIsInput(false);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isVisible ? 'visible' : ''} ${isHovering ? 'hover' : ''} ${isInput ? 'input-hover' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <div className="cursor-circle">
        {hoverText && <span className="cursor-text">{hoverText}</span>}
      </div>
    </div>
  );
};

export default CustomCursor;
