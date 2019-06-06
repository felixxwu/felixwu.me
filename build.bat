npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/felixxwu/felixxwu.github.io.git
git push -f origin master
