import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ConditionBuilder from './ConditionBuilder'

function App() {
  const [savedConditions, setSavedConditions] = useState([]);

  const databaseSchema = {
        users: [
          { name: 'id', type: 'number' },
          { name: 'name', type: 'string' },
          { name: 'status', type: 'string' },
          // ... other fields
        ],
        orders: [
          { name: 'status', type: 'string' },
          // ... order fields
        ]
      };
    
      // Define predetermined options for specific fields
      const fieldOptions = {
        users: {
          status: ['active', 'inactive', 'pending', 'banned']
        },
        orders: {
          status: [
            { value: 'pending', label: 'Pending' },
            { value: 'processing', label: 'Processing' },
            { value: 'shipped', label: 'Shipped' },
            { value: 'delivered', label: 'Delivered' },
            { value: 'cancelled', label: 'Cancelled' }
          ]
        }
      };

     

// When a condition is submitted/saved
const handleConditionSubmit = (data) => {
  // Store the condition for future use
  setSavedConditions([...savedConditions, data.rawData]);
  
  // Use the generated SQL/JSON as needed
  console.log('Generated SQL:', data.sql);
  console.log('Generated JSON:', data.json);
}
  return (

// Use the component with saved conditions support
<ConditionBuilder 
  databaseSchema={databaseSchema}
  fieldOptions={fieldOptions}
  savedConditions={savedConditions}
  allowCombiningConditions={true}
  onSubmit={handleConditionSubmit}
  buttonLabel="Create Query" 
/>
  )
}

export default App
