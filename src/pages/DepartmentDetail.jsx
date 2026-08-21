import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDepartmentBySlug } from '../data/departments'
import DepartmentHero from '../components/departments/DepartmentHero'
import DepartmentInfo from '../components/departments/DepartmentInfo'
import DepartmentServices from '../components/departments/DepartmentServices'
import DepartmentDoctors from '../components/departments/DepartmentDoctors'
import NotFound from './NotFound'

export default function DepartmentDetail() {
  const { departmentId } = useParams()
  const department = getDepartmentBySlug(departmentId)

  useEffect(() => {
    document.title = department
      ? `SYNEXUS Medical Center | ${department.name}`
      : 'SYNEXUS Medical Center | Department Not Found'
  }, [department])

  if (!department) {
    return (
      <NotFound
        title="Department Not Found"
        message="We couldn't find the department you're looking for."
        backTo="/departments"
        backLabel="Back to Departments"
      />
    )
  }

  return (
    <>
      <DepartmentHero department={department} />
      <DepartmentInfo department={department} />
      <DepartmentServices department={department} />
      <DepartmentDoctors department={department} />
    </>
  )
}