      // src/components/Layout.js
      import React, { useState } from 'react';



      const Layout = () => {

          // menu useState

        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);   
        };

            // Text uppercase useState

        const[Text, setText] = useState("");
          // covert Uppercase
        const handleUpclick = () => {
          console.log("Uppercase was clicked");
          let newText = Text.toUpperCase();
          setText(newText);
        }
          // covert Lowercase
        const handleLoclick = () => {
          console.log("Lowercase was clicked");
          let newText = Text.toLowerCase();
          setText(newText);
        }
          //Clear Text
          const handleClearclick = () => {
            console.log("Clear Text was clicked");
            let newText ="";
            setText(newText);
          }
        const handleonChange= (e)=>{
          setText(e.target.value)
        }
        // Copy Text
        const handleCopy = () => {
          console.log("I am copy");
          var text = document.getElementById("myBox");
          text.select();
          navigator.clipboard.writeText(text.value);
        }
        // Remove Extra spaces
        const handleExtraSpaces = () => {
          console.log("I am Extra Spaces");
          let newText = Text.split(/[ ]+/);
          setText(newText.join(" "));
        }


          // Dark MOde
        const [myStyle, setMyStyle] = useState({
          color:'white',
          backgroundColor:'black',
        })
        const [btnText, setBtnText] = useState("Dark Mode")
        const  tougleStyle = () => {
          if(myStyle.color === 'white'){
            setMyStyle({
              color:'black',
              backgroundColor:'white',
              
            })
            setBtnText("Dark Mode")
          }
          else{
            setMyStyle({
              color:'white',
              backgroundColor:'black',
             
            })
            setBtnText("Light Mode");
          }
        }





        return (
          <div className="flex h-screen ">
            {/* Menu (Sidebar) */}
            <div className={`bg-gray-800 text-white w-64 p-12  fixed h-full transition-all duration-300 ease-in-out 
              ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
              <h2 className="text-2xl font-bold mt-6 mb-12">Menu</h2>
              <ul className="space-y-6">
                <li>
                  <a href="#home" className="hover:text-gray-400">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-400">About</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-400">Services</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400">Contact</a>
                </li>
              </ul>
            </div>


            {/* Main Content Area (Scrollable) */}



            <div style={myStyle} className="flex-1 ml-0 md:ml-64 overflow-y-auto">
              {/* Toggle Menu Button for small screens */}
              <button
                className="bg-blue-500 text-white p-1.5 rounded-lg mb-4 md:hidden fixed top-2 left-5 z-10"
                onClick={toggleMenu}
              >
                {isMenuOpen ? 'Hide Menu' : 'Show Menu'}
              </button>
              <div className="p-4">
                
                {/* Dark mode button */}
                <div className="flex justify-center  ">
                <button onClick={tougleStyle} className="neon bg-white text-[#0b0b0b] font-semibold py-2 px-4 rounded-lg fixed transition duration-300 ease-in-out hover:text-green-500 focus:outline-none" > {btnText} </button>
                </div>
              
              {/* HOME DIV */}
                <div id="home" style={myStyle} className ="h-screen bg-white shadow-md mb-6 p-4 ">
                  <div className = "mx-12 my-9 ">
                    <h1 className="text-3xl font-bold mb-2">Home div</h1>
                    <p>This is the Home div content.</p>
                  </div>
                    {/* text written div */}
                    <div  style={myStyle} className="min-h-50 flex items-center justify-center bg-gray-100 p-4">
                            <div className="bg-white p-2.5 rounded-lg shadow-lg w-full sm:w-full md:w-full lg:w-full  overflow-y-auto">
                                <textarea id="myBox" style={myStyle}
                                      className="w-full p-4 bg-gray-100 rounded-lg mt-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                      placeholder="Write something here..."
                                      rows="4" value={Text} onChange={handleonChange}>
                                    </textarea>
                                </div>      
                          </div>
                          {/* button for  Uppercase */}
                          <button className='border-2 border-sky-500  text-white p-1.5 rounded-lg bg-sky-400 mx-3 my-2'onClick={handleUpclick}>Uppercase</button> 
                            {/* button for  Lowercase */}
                          <button className='border-2 border-sky-500  text-white p-1.5 rounded-lg bg-sky-400 mx-3 my-2'onClick={handleLoclick}>Lowercase</button>  
                              {/* button for  Clear Text */}
                          <button className='border-2 border-sky-500  text-white p-1.5 rounded-lg bg-sky-400 mx-3 my-2'onClick={handleClearclick}>Clear Text</button>  
                            {/* button for  Copy Text */}
                          <button className='border-2 border-sky-500  text-white p-1.5 rounded-lg bg-sky-400 mx-3 my-2'onClick={handleCopy}>Copy Text</button> 
                            {/* button for  Remove Extra Spaces */}
                          <button className='border-2 border-sky-500  text-white p-1.5 rounded-lg bg-sky-400 mx-3 my-2'onClick={handleExtraSpaces}>Extra Space Remove</button> 

                          {/* Your Text Summary */}
                          <div className="mx-5  ">
                            <h2 className="text-1xl font-bold ">Your Text Summary</h2>
                            <p className=''>{Text.split(" ").length} words and {Text.length} characters</p> 
                            <p>{0.009*Text.split(" ").length}Minutes read</p> 
                            </div>  
                </div>




                {/* ABOUT DIV */}
              <div  id="about" className="h-screen bg-white shadow-md mb-6 p-4">
                  <div className='mx-12 my-12 '>
                    <h1 className="text-3xl font-bold mb-2">About div</h1>
                    <p>This is the About div content.</p>
                    </div>
                  </div>

                  {/* services Dev  */}
                <div id="services" className="h-screen bg-white shadow-md mb-6 p-4">
                    <div className=' mx-12 my-12' >
                    <h1 className="text-3xl font-bold mb-2">Services div</h1>
                    <p>This is the Services div content.</p>
                  </div>               
                </div>

                {/* contact div */}
                <div id="contact" className="h-screen bg-white shadow-md p-4">
                  <div className=' mx-12 my-12' >
                    <h1 className="text-3xl font-bold mb-2">Contact div</h1>
                    <p>This is the Contact div content.</p>
                    </div> 
                </div>

              </div>
            </div>
          </div>
        );
      };

      export default Layout;
