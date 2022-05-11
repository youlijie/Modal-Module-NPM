Custom modal for Wealth Health company.

# Installation

You can install modal-module-thiw with [npm](https://www.npmjs.com/package/modal-module-thiw)

`npm i modal-module-thiw`

# Import

You need to import component and CSS
```JSX
import Modal from "modal-module-thiw";
import "modal-module-thiw/dist-unminified/index.css";

<Modal />
```

# Opening

The modal is invisible by default.
To display the modal you must pass the value `open` to the argument `setIsModalProp={'open'}`

```JSX
import Modal from "modal-module-thiw";
import "modal-module-thiw/dist-unminified/index.css";

function MyComponent() {
    return (
        <>
        <Modal setIsModalProp={'open'} isModal={'open'} />
        </>
    )
}
```

# Closing

To hide the modal you must pass the value `closed` to the argument `setIsModalProp={'closed'}` or click on the 'close' button directly on the modal.

# Options

To modify the content of modal you must use the argument `content={}`.
To change the appearance of the modal you must pass an object to the argument `modalStyle={}`

example :

```JSX
import Modal from "modal-module-thiw";
import "modal-module-thiw/dist-unminified/index.css";

function MyComponent() {
    return (
        <>
        <Modal content={myContent} modalStyle={{backgroundColor: "red", justifyContent: "left"}} />
        </>
    )
}
```

list of available style arguments :

```CSS
backgroundColor,
fontSize,
justifyContent,
width,
height,
color,
boderStyle,
borderWidth,
borderColor,
borderRadius,
```

## License

MIT © [](https://github.com/)
