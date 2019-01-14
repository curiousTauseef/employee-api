import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'
import user from '../img/user.jpg'

const MediaObject = styled.li`
    display: flex;
    padding: 20px 0 0 20px;
`

const EmployeeImg = styled.div`
    border-radius: 50%;
    flex-shrink: 0;
    overflow: hidden;
    width: 50px;
    height: 50px;
    object-fit: cover;
`

const EmployeeInfo = styled.div`
    margin-left: 20px;
    border-bottom: 1px solid ${props => props.theme.grey};
    flex-grow: 1;
    padding: 0 20px 20px 0;
`

const Bio = styled.p`
    font-size: 0.875rem;
    color: ${props => props.theme.greyTxt};
`

function addDefaultSrc(e) {
    e.target.src = user
}

const Employee = props => {
    const { employee } = props
    return (
        <MediaObject>
            <EmployeeImg>
                <img
                    src={employee.avatar}
                    alt={employee.name}
                    width="50px"
                    onError={addDefaultSrc}
                />
            </EmployeeImg>
            <EmployeeInfo>
                <h2>{employee.name}</h2>
                <p>
                    {employee.title} at {employee.company}
                </p>
                {Number.isNaN(Number(employee.bio)) && (
                    <Bio>{sanitizeHtml(employee.bio, { allowedTags: [] })}</Bio>
                )}
            </EmployeeInfo>
        </MediaObject>
    )
}

Employee.propTypes = {
    employee: PropTypes.shape({
        uuid: PropTypes.string,
        avatar: PropTypes.string,
        bio: PropTypes.string,
        company: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
    }).isRequired,
}

export default Employee
