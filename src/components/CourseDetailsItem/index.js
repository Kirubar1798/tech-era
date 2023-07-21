import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="CourseDetailsCard">
      <div className="CourseDetailsContainer">
        <img className="CourseDetailsImage" src={imageUrl} alt={name} />
        <div className="CourseInfoContainer">
          <h1 className="CourseDetailsTitle">{name}</h1>
          <p className="CourseDetailsInfo">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem
