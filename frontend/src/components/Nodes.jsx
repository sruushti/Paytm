export default [
    {
        id: '1',
        type: 'input',
        data: {label: 'Start'},
        position: {x: 200, y: 5}
    }, {
        id: '2',
        data: {label: <h3>Signup</h3>},
        position: {x: 50, y: 105}
    }, {
        id: '3',
        data: {label: <h3>Signin</h3>},
        position: {x: 350, y: 105} 
    }, {
        id: '4',
        data: { label: 'User' },
        position: { x: 200, y: 205 }
      }, {
        id: '5',
        data: { label: 'Balance Review' },
        position: { x: 420, y: 245 }
      }, {
        id: '6',
        type: 'output',
        data: { label: 'Payment' },
        position: { x: 182, y: 325 }
      },
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e1-3', source: '1', target: '3', animated: true },
      { id: 'e2-4', source: '2', target: '4', animated: true },
      { id: 'e3-4', source: '3', target: '4', animated: true },
      { id: 'e4-5', source: '4', target: '5', animated: true },
      { id: 'e4-6', source: '4', target: '6', animated: true }  
  ];
  