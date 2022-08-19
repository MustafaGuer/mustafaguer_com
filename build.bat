git add .
set /p commit=Commit:
git commit -m "%commit%"
git push

ng build
