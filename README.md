Ideas:
- [ ] More general configuration option
- [ ] Add in user's DND times: https://api.slack.com/methods/dnd.info
- [ ] Dynamic daylight displays
- [ ] Add the ability to toggle cities if you click the arm (Apollo East)
- [ ] Add a meeting time slider, so you can drag hands around to predict how your meeting will affect different timezones
- [ ] Add an "Arm adder" which has a dropdown of tzs and stores your personal arms in localstorage
- [ ] Add people's photos? Or work in that concept
- [ ] DB for easier hand configuration/changing?
- [ ] Display dates around midnight and international date line
- [ ] Make a size changer that gets saved in local storage

To run:

```
meteor
```

Deployment lives on Galaxy in the mdg account, and the app lives at [clock.apollographql.com](https://clock.apollographql.com).

To deploy:

```
DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy clock.apollographql.com --owner mdg
```
