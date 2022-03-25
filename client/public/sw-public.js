console.log ('runtime cipher');

this.addEventListener ('install', function (event) {
  console.log ('installing....');
});
this.addEventListener ('fetch', function (event) {
  console.log ('fetching.....');
});
this.addEventListener ('push', async function (event) {
  console.log ({event});
  const data = await event.data.json ();
  let {title, description} = data;
  console.log ({data});
  await event.waitUntil (
    this.registration.showNotification (title, {
      body: description,
      icon: 'https://lh3.googleusercontent.com/-CDwdQMzLN0M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclEEYuRSr7oFel9Y9wQvUGcI8sYPw/s128-c/photo.jpg',
      actions: [
        {
          action: 'whatsapp link',
          title: 'view event',
        },
      ],
    })
  );
});
