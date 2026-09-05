# Sincroniza site/ -> dist/ (fonte da verdade: site/)
# Arquivos que começam com "_" (ex.: _cases-pt.html) são internos e NÃO são publicados.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

$dist = Join-Path $root "dist"
$site = Join-Path $root "site"

if (Test-Path $dist) {
    Remove-Item -Path (Join-Path $dist "*") -Recurse -Force
} else {
    New-Item -ItemType Directory -Path $dist | Out-Null
}

Get-ChildItem -Path $site -Exclude "_*" | Copy-Item -Destination $dist -Recurse -Force
Write-Host "site/ sincronizado para dist/ com sucesso."
