import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// TODO better way? FontAwesome?
const Icon = ({ name, size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-labelledby={name}
      role="presentation"
      className={className}
    >
      {name === "github" && (
        <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" />
      )}
      {name === "twitter" && (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C17.5191 2 22 6.48086 22 12C22 17.5191 17.5191 22 12 22C6.48086 22 2 17.5191 2 12C2 6.48086 6.48086 2 12 2ZM10.2386 17.3187C14.6637 17.3187 17.0833 13.6519 17.0833 10.474C17.0833 10.3693 17.0833 10.2645 17.0783 10.1647C17.5473 9.82547 17.9564 9.40141 18.2806 8.9175C17.8516 9.10707 17.3876 9.2368 16.8987 9.29664C17.3976 8.9973 17.7768 8.52836 17.9564 7.96465C17.4924 8.23902 16.9786 8.43855 16.4298 8.54832C15.9907 8.07937 15.3671 7.79004 14.6737 7.79004C13.3467 7.79004 12.2691 8.86762 12.2691 10.1946C12.2691 10.3842 12.2891 10.5688 12.3339 10.7434C10.3334 10.6436 8.56238 9.68578 7.37508 8.22902C7.17051 8.58324 7.05078 8.9973 7.05078 9.43633C7.05078 10.2695 7.47484 11.0078 8.1234 11.4368C7.72926 11.4269 7.36008 11.3171 7.03582 11.1375V11.1675C7.03582 12.3348 7.86395 13.3027 8.96648 13.5272C8.76695 13.582 8.55242 13.612 8.33293 13.612C8.17824 13.612 8.02859 13.597 7.87895 13.5671C8.18324 14.5249 9.07125 15.2184 10.1239 15.2383C9.30074 15.8819 8.26309 16.2661 7.13559 16.2661C6.94102 16.2661 6.75145 16.2561 6.56187 16.2311C7.61453 16.9196 8.88168 17.3187 10.2386 17.3187Z"
        />
      )}
      {name === "youtube" && (
        <path d="M17 10.5V7C17 6.73478 16.8946 6.48043 16.7071 6.29289C16.5196 6.10536 16.2652 6 16 6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7V17C3 17.2652 3.10536 17.5196 3.29289 17.7071C3.48043 17.8946 3.73478 18 4 18H16C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V13.5L21 17.5V6.5L17 10.5Z" />
      )}
      {name === "language" && (
        <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" />
      )}
      {name === "darkTheme" && (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.0909 11.9999C11.0909 15.03 12.4386 17.7453 14.5672 19.5792C13.7614 19.852 12.898 19.9999 12 19.9999C7.58173 19.9999 4.00001 16.4182 4.00001 11.9999C4.00001 7.58167 7.58173 3.99994 12 3.99994C12.898 3.99994 13.7614 4.14789 14.5672 4.42074C12.4386 6.25459 11.0909 8.96989 11.0909 11.9999Z"
        />
      )}
      {name === "lightTheme" && (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 20L13 20L13 23L11 23L11 20ZM11 4L11 0.999999L13 0.999999L13 4L11 4ZM23 11L20 11L20 13L23 13L23 11ZM0.999999 11L4 11L4 13L0.999999 13L0.999999 11ZM4.92886 3.51474L3.51465 4.92895L5.63597 7.05027L7.05018 5.63606L4.92886 3.51474ZM16.9497 18.364L18.3639 16.9498L20.4852 19.0711L19.071 20.4853L16.9497 18.364ZM19.071 3.51466L16.9497 5.63598L18.3639 7.0502L20.4852 4.92888L19.071 3.51466ZM3.51465 19.071L5.63597 16.9497L7.05018 18.3639L4.92886 20.4853L3.51465 19.071ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79087 16 8.00001 14.2091 8.00001 12C8.00001 9.79087 9.79087 8.00001 12 8.00001C14.2091 8.00001 16 9.79087 16 12Z"
        />
      )}
      {name === "search" && (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L22.3225 20.9083L20.9083 22.3225L16.6177 18.0319ZM18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
        />
      )}
      {name === "chevron-down" && (
        <path d="M7.41 8.58002L12 13.17L16.59 8.58002L18 10L12 16L6 10L7.41 8.58002Z" />
      )}
      {name === "menu" && (
        <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" />
      )}
      {name === "close" && (
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
      )}
    </svg>
  )
}

Icon.defaultProps = {
  name: ``,
  size: `24`,
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
}

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.secondary};

  &:hover {
    fill: ${(props) => props.theme.colors.primary};
  }
`

export default StyledIcon
