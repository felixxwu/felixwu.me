npm run build
cd dist
echo 'felixwu.me' > CNAME
git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/felixxwu/felixxwu.github.io.git
git push -f origin master