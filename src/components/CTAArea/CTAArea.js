import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"
import CTA from "../CTA/CTA"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()
  return (
    <Wrapper>
      <CTA />
    </Wrapper>
  )
}
export default CTAArea
