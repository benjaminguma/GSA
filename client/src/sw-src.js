import axios from 'axios';
export default function sw () {
  if ('serviceWorker' in navigator) {
    regSw ();
  } else {
    console.log ('oopsie!! no service worker in navigator ');
  }
}

async function regSw () {
  let url = process.env.PUBLIC_URL + '/sw-public.js';
  console.log ('registering service worker....');
  const reg = await navigator.serviceWorker.register (url, {scope: '/'});
  console.log ('service config is', {reg});
  const subscription = await reg.pushManager.getSubscription ();
  let sub1;
  if (!subscription) {
    sub1 = await reg.pushManager.subscribe ({
      userVisibleOnly: true,
      applicationServerKey: 'BDot_cBh90HPutRxDWONcn7WcRwJvJxD7yJWFQMwyNTPuvFZ2shYnDNZViVqeFkGFjheakJmZUpnJxCsRNVwL1E',
    });
    console.log ({sub1});
    axios.post ('/subscribe', sub1);
  } else sub1 = subscription;
  console.log ('registered to push service');
  //   if (!subscription)
}
