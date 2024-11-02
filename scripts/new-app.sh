echo Running ng new
pnpm ng new $1 --style scss --ssr false --skip-git true --skip-tests true --skip-install true --inline-style true --inline-template true --routing false --standalone true

echo Running prettier
pnpm exec prettier $1 --write > /dev/null
