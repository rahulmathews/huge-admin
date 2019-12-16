import React, {Component} from 'react';

import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TextEditor extends Component{
    constructor(props){
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    componentDidMount = () => {
        const elems = document.getElementsByClassName('rdw-editor-main');

        for(let ele of elems){
            ele.style.height = "200px";
            ele.style.padding = "4px";
            ele.style.border = "2px solid #17b7b79e";
            ele.style['border-radius'] = "5px";
        }
    }

    render(){
        return (
            <Editor
                toolbar={{
                    image: { alt: { present: true }, previewImage: false },
                    fontFamily: {
                    options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Roboto', 'Times New Roman', 'Verdana'],
                    }
                }}
                placeholder={this.props.placeholder}
                hashtag={{}}
            />
        )
    }
}

export default TextEditor;