if [ -n "$GITHUB_TOKEN" ]; then
    cd "$TRAVIS_BUILD_DIR"
    # This generates a `web` directory containing the website.
    git checkout --orphan gh-pages
    git add style
    git -c user.name='travis' -c user.email='travis' commit -m init
    # Make sure to make the output quiet, or else the API token will leak!
    # This works because the API key can replace your password.
    git push origin HEAD -f -q 
fi