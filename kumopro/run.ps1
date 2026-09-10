
if (Test-Path .docusaurus) {
    Remove-Item -Recurse -Force .docusaurus
}
if (Test-Path node_modeules\.cache) {
    Remove-Item -Recurse -Force node_modules\.cache
}

npm run start
