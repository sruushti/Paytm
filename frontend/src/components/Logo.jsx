import React from 'react';
import logo from '../assets/finance.svg'; // Adjust the path as needed

export const Logo = (props) => (
    <img src={logo} alt="Logo" {...props} />
);

// export const Logo = (props) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="48"
//         height="48"
//         id="finance"
//         {...props}  // Spread the props onto the SVG element
//     >
//         <g transform="translate(0 -1004.362)">
//             <circle cx="24" cy="1028.362" r="24" fill="#ffa40b" fillRule="evenodd"></circle>
//             <path
//                 fill="#ff7712"
//                 d="M27.25 47.75a24 24 0 0 0 .83-.1 24 24 0 0 0 2.34-.525 24 24 0 0 0 2.277-.756 24 24 0 0 0 2.19-.98 24 24 0 0 0 2.08-1.194 24 24 0 0 0 1.951-1.394 24 24 0 0 0 1.803-1.584 24 24 0 0 0 1.634-1.756 24 24 0 0 0 1.454-1.91 24 24 0 0 0 1.254-2.045 24 24 0 0 0 1.042-2.16 24 24 0 0 0 .823-2.254 24 24 0 0 0 .593-2.324 24 24 0 0 0 .36-2.372 24 24 0 0 0 0-.013L39 17.502a.5.5 0 0 0-.5-.5h-1.998L34 14.5a.5.5 0 0 0-.5-.5h-24a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5l4.5 4.5a.5.5 0 0 0 .5.5l12.75 12.75z"
//                 transform="translate(0 1004.362)"
//             ></path>
//             <path
//                 fill="#fff"
//                 d="M1.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5H6v4.5a.5.5 0 0 0 .867.34L8.568 23h12.09l4.475 4.838a.5.5 0 0 0 .867-.336v-4.5h4.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H26V4.5a.5.5 0 0 0-.5-.5h-24ZM2 5h23v14H11.123a.5.5 0 0 0-.367.162L8.133 22h-.004v.004L7 23.224V19.5a.5.5 0 0 0-.5-.5H2V5Zm9.027 3v.01h-.023v1h1.027c.935 0 1.405.441 1.574.99h-2.578v1h2.578c-.17.549-.64.992-1.574.992h-1.028v1h.296L14.349 16l.704-.71-2.395-2.364A2.51 2.51 0 0 0 14.631 11h1.365v-1h-1.365c-.077-.36-.244-.7-.479-1h1.844V8h-4.969zM26 8h4v14h-4.5a.5.5 0 0 0-.5.5v3.723l-3.756-4.063a.5.5 0 0 0-.367-.16H9.492l1.85-2H25.5a.5.5 0 0 0 .5-.5V8Z"
//                 transform="translate(8 1014.362)"
//             ></path>
//         </g>
//     </svg>
// );



//<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="finance"><g transform="translate(0 -1004.362)"><circle cx="24" cy="1028.362" r="24" fill="#ffa40b" fill-rule="evenodd"></circle><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#ff7712" d="M27.25 47.75a24 24 0 0 0 .83-.1 24 24 0 0 0 2.34-.525 24 24 0 0 0 2.277-.756 24 24 0 0 0 2.19-.98 24 24 0 0 0 2.08-1.194 24 24 0 0 0 1.951-1.394 24 24 0 0 0 1.803-1.584 24 24 0 0 0 1.634-1.756 24 24 0 0 0 1.454-1.91 24 24 0 0 0 1.254-2.045 24 24 0 0 0 1.042-2.16 24 24 0 0 0 .823-2.254 24 24 0 0 0 .593-2.324 24 24 0 0 0 .36-2.372 24 24 0 0 0 0-.013L39 17.502a.5.5 0 0 0-.5-.5h-1.998L34 14.5a.5.5 0 0 0-.5-.5h-24a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5l4.5 4.5a.5.5 0 0 0 .5.5l12.75 12.75z" color="#000" font-family="sans-serif" font-weight="400" transform="translate(0 1004.362)"></path><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#fff" d="M1.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5H6v4.5a.5.5 0 0 0 .867.34L8.568 23h12.09l4.475 4.838a.5.5 0 0 0 .867-.336v-4.5h4.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H26V4.5a.5.5 0 0 0-.5-.5h-24ZM2 5h23v14H11.123a.5.5 0 0 0-.367.162L8.133 22h-.004v.004L7 23.224V19.5a.5.5 0 0 0-.5-.5H2V5Zm9.027 3v.01h-.023v1h1.027c.935 0 1.405.441 1.574.99h-2.578v1h2.578c-.17.549-.64.992-1.574.992h-1.028v1h.296L14.349 16l.704-.71-2.395-2.364A2.51 2.51 0 0 0 14.631 11h1.365v-1h-1.365c-.077-.36-.244-.7-.479-1h1.844V8h-4.969zM26 8h4v14h-4.5a.5.5 0 0 0-.5.5v3.723l-3.756-4.063a.5.5 0 0 0-.367-.16H9.492l1.85-2H25.5a.5.5 0 0 0 .5-.5V8Z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(8 1014.362)"></path></g></svg>