import algoliasearch from 'algoliasearch';

const client = algoliasearch('74S1JNB1ZT', '3de6fdbafc477cf019673bb81043ae0d');
const index = client.initIndex('pages');

export default index;
