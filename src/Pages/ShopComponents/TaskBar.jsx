import React from 'react'

const TaskBar = () => {
  return (
    <>
        <section id='task-bar'>
            <div className="first">
            <p>Sort by</p>
            <span>Default <i className="fa-solid fa-angle-down"></i></span>
            </div>
            <div className="second">
                <p><b>16</b> Product found</p>
            </div>
            <div className="third">
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-list"></i>
            </div>
        </section>
    </>
  )
}

export default TaskBar