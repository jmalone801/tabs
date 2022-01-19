import React, { useState } from 'react';

const Tabs = (props) => {

    const [tab, setTab] = useState({
        content: ["You made it to tab 1!", "Now you are at tab 2! Yay!", "Congrats! This is the 3rd and final tab!"],
        selectedTab: "",
    });

    const onClickHandler = (index) => {
        setTab({
            ...tab,
            selectedTab: index,
        })
    }

    return (
        <div className="container">
            <div className="bloc-tabs">
                <div className="tabsFlex">
                    {tab.content.map((tab, index) => (
                        <button className="tabs btn btn-secondary" onClick={() => onClickHandler(index)}>
                            Tab {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            <div className="content-tabs">
                <h2>Content {tab.selectedTab + 1}</h2>
                <p>{tab.content[tab.selectedTab]}</p>
            </div>
        </div>
    )



}

export default Tabs;



// import React, { useState } from 'react';

// const Tabs = (props) => {

//     const [tab, setTab] = useState({
//         content: ["You made it to tab 1!", "Tab two boi!!", "Congrats! Tab3!"],
//         selectedTab: "",
//     });

//     const onClickHandler = (index) => {
//         setTab({
//             ...tab,
//             selectedTab: index,
//         })
//     }

//     return (
//         <div className="container">
//             <div className="bloc-tabs">
//                 <button className={tab === tab.selectedTab ? "tabs active-tabs" : "tabs"}>
//                     <div>
//                         {tab.content.map((tab, index) => (
//                             <div  onClick={() => onClickHandler(index)}>
//                                 Tab {index + 1}
//                             </div>
//                         ))}
//                     </div>
//                 </button>
//             </div>

//             <div className="content-tabs">
//                 <div className={ tab.index === tab.selectedTab ? "content active-content" : ""}>
//                     <h2>Content {tab.selectedTab + 1}</h2>
//                     <p>
//                         {tab.content[tab.selectedTab]}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )



// }

// export default Tabs;