import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { ThemedButton } from "../Theme";
import GoogleLogo from '../../assets/google_sso.svg';
import AppleLogo from '../../assets/aaple_sso.svg';

function Component() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const emailInputRef = useRef();
  const firstInputRef = useRef();
  const lastNameInputRef = useRef();

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
        <ThemedButton 
            props={{
                variant:"contained", 
                size:"small", 
                sx:{width: '150px', height: '50px', marginTop:"8px", float:"right", marginLeft: '20px'},
                onClick:() => setOpenModal(true)

            }}
            text={"Sign up"} 
            color={"secondary"}
          /> 
        <Modal show={openModal} size="2xl" className="text-xl" popup onClose={onCloseModal} initialFocus={firstInputRef}>
            <Modal.Header />
            <Modal.Body>
            <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h3>
                <Button style={{backgroundColor: "white", border: "2px solid black", width:"400px", color:"black", borderRadius:"20px", fontSize:"24px"}}>
                    <img src={GoogleLogo} width="25px" style={{marginRight: "25px"}} />    
                    {"Sign in with Google"}
                </Button>

                <br />
                <Button style={{backgroundColor: "white", border: "2px solid black", width:"400px", color:"black", padding: "-10px", borderRadius:"20px", fontSize:"24px"}}>
                    <img src={AppleLogo} width="25px" height="30px" style={{marginRight: "25px"}} />
                    {"Sign in with Apple"}
                </Button>

                <br /><div><span>or</span></div>
                

                <div>
                <div className="mb-2 block">
                    <Label htmlFor="firstName" value="Your First name" />
                </div>
                <TextInput
                    id="first_name"
                    placeholder="First name"
                    value={firstName}
                    ref={firstInputRef}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                    style={{backgroundColor: "white", border: "2px solid black", width:"400px", color:"black", borderRadius:"20px",}}
                />
                <div className="mb-2 block">
                    <Label htmlFor="lastName" value="Your Surname" />
                </div>
                
                <TextInput
                    id="last_name"
                    placeholder="Surname"
                    value={lastName}
                    ref={lastNameInputRef}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                    style={{backgroundColor: "white", border: "2px solid black", width:"400px", color:"black", borderRadius:"20px",}}
                />
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                
                <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    ref={emailInputRef}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    style={{backgroundColor: "white", border: "2px solid black", width:"400px", borderRadius:"20px", color:"black"}}
                />
                </div>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required style={{backgroundColor: "white", border: "2px solid black", width:"400px", borderRadius:"20px", color:"black"}} />
                </div>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="confirm_password" value="Confirm password" />
                </div>
                <TextInput id="password" type="password" required style={{backgroundColor: "white", border: "2px solid black", width:"400px", borderRadius:"20px", color:"black"}} />
                </div>
                <br />
                <Button style={{ border: "2px solid black", width:"400px"}}>SIGN UP</Button>
                <div className="flex justify-between text-xl font-medium text-gray-500 dark:text-gray-300">
                Already registered?&nbsp;
                <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                    Sign In
                </a>
                </div>
            </div>
            </Modal.Body>
        </Modal>
    </>
  );
}

export default Component;