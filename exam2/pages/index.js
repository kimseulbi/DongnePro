import react from 'react'
import Router from 'next/router'

class Index extends react.Component {
    render(){
        return(
            <div>
                <div>
                    Click <span onClick={() => Router.push('/notification')}>here</span> to notification page
                </div>
                <div>
                    Hello, Publisher!
                </div>
                <style jsx>{`
                    span {
                        color: blue;
                    }
                `}</style>
            </div>
        )
    }
}

export default Index