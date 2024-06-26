import TestimonyForm from './TestimoniesForm'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdClose, MdDelete, MdEdit, MdVisibility } from 'react-icons/md'

// import '../userscomponent/Users.css'
function Testimony ({ testimony, handleEdit, handleDelete, handleView }) {
  const { _id, name, contacts, maintestimony, date, image } = testimony

  return (
    <tr className='testimony'>
      <td>
        {name}
      </td>
      <td>
        <img className='user-image' src={image} />
      </td>

      <td>
        {contacts}
      </td>
      <td>
        {maintestimony}
      </td>
      <td>
        {date}
      </td>
      <td className='actions'>
        <button onClick={() => handleView(_id)}>
          <MdVisibility />
        </button>

        <button onClick={() => handleEdit(_id)}>
          <MdEdit />
        </button>

        <button onClick={() => handleDelete(_id)}>
          <MdDelete />
        </button>
      </td>
    </tr>
  )
}

function TestimoniesManagement () {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [TestimonyToUpdate, setTestimonyToUpdate] = useState(null)

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  const handleAddSection = () => {
    setIsFormOpen(true)
    // setBlogToUpdate(null);
  }

  const handleReload = () => {
    window.location.reload()
  }
  const handleEdit = testimonyId => {
    const testimony = testimonies.find(
      testimony => testimony._id === testimonyId
    )
    setTestimonyToUpdate(testimony)
    setIsFormOpen(true)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const url = 'https://myportfolioapi-8vku.onrender.com'
  const [testimonies, setTestimonies] = useState([])

  const fetchTestimonies = async () => {
    try {
      const response = await axios.get(`${url}/testimony/getTestimony`)
      setTestimonies(response.data.data)
    } catch (error) {
      console.error('Error fetching testimonies:', error)
      // Handle error if necessary
    }
  }

  useEffect(() => {
    fetchTestimonies()
  }, [])

  const currentTestimonies = testimonies.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='testimonies list-of-items-container'>
      <h1>List of Testimonies</h1>
      <button className='add-button' onClick={handleAddSection}>
        Add Testimony
      </button>

      {isFormOpen &&
        <TestimonyForm
          handleClose={handleCloseForm}
          TestimonyToUpdate={TestimonyToUpdate}
          handleReload={handleReload}
        />}

      <table className='testimonies table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>image</th>
            <th>Contacts</th>
            <th>Main Testimony</th>
            <th>Date</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTestimonies.map(testimony =>
            <Testimony
              key={testimony._id}
              testimony={testimony}
              handleEdit={handleEdit}
            />
          )}
        </tbody>
      </table>

      <div className='pagination'>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= testimonies.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TestimoniesManagement
