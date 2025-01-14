import Client from '@snapshot-labs/snapshot.js/src/client';

const hubUrl: any =
  import.meta.env.VITE_HUB_URL || 'https://hub.snapshot.org';
const client = new Client(hubUrl);

export default client;
