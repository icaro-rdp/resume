Delete gh-pages branches on github

npm run build
git add dist -f
git commit -m "deploy"
git subtree push --prefix dist origin gh-pages
git reset --hard HEAD^

