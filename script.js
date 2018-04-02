const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
	console.log('Server Response:', resp);
}).catch(err => {
	console.log('There was an error:', err.message);
});

const newItem = {
	title: 'Li\'s new item',
	details: 'practising Axios'
};

// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then(resp => {
// 	console.log('Add Response:', resp);
// });
// 
// _id: '5ac278f6329150131fbbff6c'

const itemId = '5ac278f6329150131fbbff6c';

axios.get(`http://api.reactprototypes.com/todos/${itemId}${API_KEY}`).then(resp => {
	console.log('Server Response using item ID:', resp);
})