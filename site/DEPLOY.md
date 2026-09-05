# Deploy Configuration: arlucas.com.br

## Hostinger Account
- **Username:** `u836743426`
- **Domain:** `arlucas.com.br`
- **Order ID:** `1005503980`
- **Root Directory:** `/home/u836743426/domains/arlucas.com.br/public_html`
- **Auth:** OAuth 2.0 PKCE (credentials in `%APPDATA%\hostinger-mcp\credentials.json`)

## MCP Configuration
- **Tool:** `hostinger-api-mcp` (382 tools)
- **Transport:** stdio
- **Config:** `opencode.json` (project root)
- **Global Config:** `~/.config/opencode/opencode.jsonc`

## Site Structure
```
arlucas.com.br/
├── index.html           (PT-BR homepage)
├── en/index.html        (EN homepage)
├── about/               (PT-BR about)
├── services/            (PT-BR services)
├── contact/             (PT-BR contact)
├── en/about/            (EN about)
├── en/services/         (EN services)
├── en/contact/          (EN contact)
├── blog/                (WordPress PT-BR)
│   ├── .htaccess
│   ├── wp-config.php
│   └── wp-content/
└── en/blog/             (WordPress EN)
    ├── .htaccess
    ├── wp-config.php
    └── wp-content/
```

## WordPress Installations
- **Root WP** (ID: 30459633): Original installation, replaced by static site
- **Blog PT-BR** (ID: 30460409): `/blog/`, locale `pt_BR`, login `arlucas_admin`
- **Blog EN** (ID: 30460421): `/en/blog/`, locale `en_US`

## .htaccess (Server Root)
Routes `/blog/` and `/en/blog/` to WordPress, all other requests to `index.html`.

## Status
- ✅ Static site deployed
- ✅ WordPress PT-BR installed
- ✅ WordPress EN installed
- ✅ .htaccess configured
- ✅ OAuth authenticated
- ✅ Plugins installing (wordpress-seo, woocommerce, contact-form-7, wp-smushit)

## Tools Used
- `hosting_listWebsitesV1` - List websites
- `hosting_installWordPressV1` - Install WordPress
- `hosting_deployStaticWebsite` - Deploy static files
- `hosting_listWordPressInstallationsV1` - Check WP installations
- `hosting_installWordPressPluginsV1` - Install WP plugins
- `hosting_getWebsiteFileContentV1` - Get file content
- `hosting_listWebsiteFilesAndDirectoriesV1` - List server files