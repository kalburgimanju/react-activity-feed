```js

const activities = [
  {
    actor: {
      data: {
        name: 'Jaap Bakker',
        profileImage: 'https://randomuser.me/api/portraits/men/72.jpg'
      }
    },
    verb: 'follow',
    object: {
      verb: 'post',
      content: 'Winds 2 is the Open Source megalocosmos flat earth effect of anti-gravity food chemicals...',
      author: 'Josh'
    },
    time: Date.now() - 1000000
  },
  {
    actor: {
      data: {
        name: 'Jaap Bakker',
        profileImage: 'https://randomuser.me/api/portraits/women/72.jpg'
      }
    },
    verb: 'heart',
    object: {
      verb: 'post'
    }
  },
  {
    actor: {
      data: {
        name: 'Jaap Bakker',
        profileImage: 'https://randomuser.me/api/portraits/women/7.jpg'
      }
    },
    verb: 'heart',
    object: {
      verb: 'post'
    }
  }
];

<DropdownPanel
  Header={
    <NewActivitiesNotification adds={[{},{},{},{},{},]} />
  }
  Footer={
    <div style={{display: 'flex', padding: 10, alignItems: 'center', justifyContent: 'center' }}><Link to="#">View All Notifications</Link></div>
  }
  >
  <Notification activities={activities} />
  <Notification activities={activities} />
  <Notification activities={activities} />
  <Notification activities={activities} />
  <Notification activities={activities} />
  <Notification read activities={activities} />
  <Notification read activities={activities} />
  <Notification read activities={activities} />
</DropdownPanel>
```