import React, { Fragment } from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <Fragment>
            <p className='f3'>
                {'This App will detect faces in your pictures. Git it a try.'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type="tex" />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </Fragment>

    );
}

export default ImageLinkForm;