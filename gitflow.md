# Keep Your Fork Updated with Upstream
When the original repository gets updated, follow these steps to sync your fork:

1. Switch to the main branch:
```git checkout main```
2. Fetch the latest updates from the original repository (upstream):
```git fetch upstream```
3. Merge the updates into your local main branch:
```git merge upstream/main```
4. Push the updated main branch to your GitHub fork:
```git push origin main```

# Update Your Feature Branch
If you want to apply the upstream changes to your custom branch:

1. Switch to your custom branch:
```git checkout my-Features```
2. Merge updates from main:
```git merge main```
3. If there are conflicts:
Resolve the conflicts manually in your code.
4. After fixing, stage the changes:
```git add .```
5. Complete the merge:
```git merge --continue```
6. Push the updated custom branch:
```git push origin my-Features```
