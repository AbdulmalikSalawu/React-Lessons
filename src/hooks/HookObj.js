import React, {useState} from 'react'

function HookObj() {
    const [name, setName] = useState({firstName: "", lastName: ""})
  return (
    <div>
        <form>
            <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})} />
            <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
            
            {/* the statement above means, just replicate every details in the name variable and only update either the first or lastName */}

            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>

            <h2>{JSON.stringify(name)}</h2>

        </form>
    </div>
  )
}

export default HookObj