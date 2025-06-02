## Instructioms

## 1. Started

```
npm login --registry=https://npm.pkg.github.com

When prompted:
Username: your GitHub username
Password: your GitHub PAT
Email: any email on your GitHub
```

## 2. Dependabces

```
npm install -g typescript
tsc --init
npm run build
npm publish
```

## .npmrc includes:

```
@linosnchena:registry=https://npm.pkg.github.com/
```

## 4. Install in apps

```
npm install @linosnchena/shared-troopers-packages
import { API_URL, User } from '@linosnchena/shared-troopers-packages'
```

## End
