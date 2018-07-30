Ideas:

- [ ] Add people's photos? Or work in that concept
- [ ] Host on clock.apollographql.com
- [ ] Easy config file for changes
- [ ] Break out components
- [ ] DB for easier hand configuration/changing?
- [ ] Display dates around midnight and international date line
- [ ] Make a size changer that gets saved in local storage
- [x] Minute hand
- [x] Background color selector
- [x] International date line
- [x] Auto-detect which timezone you're in
- [x] GMT offsets on hands

To run:

```
meteor
```

Deployment lives on Galaxy in the mdg account, and the app lives at [clock.apollographql.com](https://clock.apollographql.com).

To deploy:

```
DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy clock.apollographql.com --owner mdg
```
