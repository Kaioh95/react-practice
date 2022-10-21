import './SectionTitle.css'
import React from 'react'

const SectionTitle = (props: any) => (
    <div className="SectionTitle">
        <h3>{props.title}</h3>
    </div>
)

export default SectionTitle