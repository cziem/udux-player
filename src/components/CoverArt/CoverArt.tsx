import { UduxLogo } from "components/Icons"
import OmahLay from "../../assets/images/Omah-Lay.png"
import { StyledCoverArt } from "./styles"
import gsap from "gsap"
import React from "react"

export const CoverArt = () => {
  let logoRef = React.useRef<HTMLDivElement | null>(null)
  let artistRef = React.useRef<HTMLImageElement | null>(null)

  React.useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        duration: 0.75,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
      }
    )
    gsap.fromTo(
      artistRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        duration: 1.25,
        opacity: 1,
      }
    )
  }, [])

  return (
    <StyledCoverArt>
      <div
        className="logo-wrapper"
        ref={el => (el ? (logoRef.current = el) : null)}
      >
        <UduxLogo />
      </div>

      <div className="artist-name">
        <img
          src={OmahLay}
          alt="Omah Lay"
          ref={el => (el ? (artistRef.current = el) : null)}
        />
      </div>
    </StyledCoverArt>
  )
}
