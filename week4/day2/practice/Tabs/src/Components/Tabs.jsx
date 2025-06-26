import {useState} from 'react'

const Tabs = () => {
const [items,SetItems]=useState([
    { label: 'Tab 1', content: 'This is Tab 1 content' },
    { label: 'Tab 2', content: 'This is Tab 2 content' },
    { label: 'Tab 3', content: 'This is Tab 3 content' },
])
const [SelectedTab,setSelectedTab]=useState(0)

  return (
    <>
  <div>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            style={{
              margin: '5px',
              padding: '10px',
              backgroundColor: SelectedTab === index ? 'black' : 'gray',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '20px', fontSize: '20px',border:"solid 1px black",height:"200px", }}>
        {items[SelectedTab].content}
      </div>
    </>
  )
}

export default Tabs