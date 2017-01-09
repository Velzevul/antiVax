import React from 'react'
import {connect} from 'react-redux'

import Box from '../Layouts/Box'
import Block from '../Layouts/Block'
import Heading1 from '../Typography/Heading1'
import Text from '../Typography/Text'
import {Row, Column, Cell} from '../Table'
import Wrapper from '../Layouts/Wrapper'

const CustomPageSchedule = ({
  layout
}) => {
  let vaccineColumnWidth = 0
  let showFullName = null
  let boxSize = 0

  switch (layout) {
    case 's':
    case 'm':
      vaccineColumnWidth = '7rem'
      showFullName = false
      boxSize = 4
      break
    case 'l':
    case 'xl':
      vaccineColumnWidth = '25rem'
      showFullName = true
      boxSize = 8
      break
    default:
      console.error(`unexpeted layout type ${layout}`)
  }

  return (
    <Wrapper>
      <Box n={boxSize}>
        <Block n={2}>
          <Heading1 underline>Vaccination Schedule</Heading1>
        </Block>

        <Block n={2}>
          <Text>This is the recommended schedule for vaccinations in Manitoba.</Text>
        </Block>

        <Block>
          <Row heading bt>
            <Column width={vaccineColumnWidth} bl />

            <Column width="stretch" bl>
              <Row bb>
                <Column width="45%" br><Cell heading>Months</Cell></Column>
                <Column width="18%" br><Cell heading>Years</Cell></Column>
                <Column width="18%" br><Cell heading>Grade</Cell></Column>
                <Column width="stretch" br><Cell heading>Years</Cell></Column>
              </Row>
            </Column>
          </Row>

          <Row heading bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right" heading>
                Vaccine
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%"><Cell>2</Cell></Column>
                <Column width="9%"><Cell>4</Cell></Column>
                <Column width="9%"><Cell>6</Cell></Column>
                <Column width="9%"><Cell>12</Cell></Column>
                <Column width="9%" br><Cell>18</Cell></Column>
                <Column width="18%" br><Cell>4-6</Cell></Column>
                <Column width="9%"><Cell>4</Cell></Column>
                <Column width="9%" br><Cell>6</Cell></Column>
                <Column width="stretch" br><Cell>14-16</Cell></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                DTaP-Hib-IPV {showFullName ? '(Diphtheria, Tetanus, Pertussis, Hemophilus influenzae type b, Polio)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="18%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="stretch" br><Cell /></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                PCV {showFullName ? '(Pneumococcus conjugate vaccine)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="18%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="stretch" br><Cell /></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                RV {showFullName ? '(Rotavirus vaccine)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="18%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="stretch" br><Cell /></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                MMRV {showFullName ? '(Measles, mumps, rubella, varicella)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="18%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="stretch" br><Cell /></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                MCV {showFullName ? '(Meningococcus conjugate vaccine)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="18%" br><Cell /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="stretch" br><Cell /></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                PCV {showFullName ? '(Pneumococcus conjugate vaccine)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="18%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="stretch" br><Cell /></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                Tdap-IPV {showFullName ? '(Tetanus, Diphtheria, Pertussis, Polio)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="18%" br><Cell filled /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="stretch" br><Cell /></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                HBV {showFullName ? '(Hepatitis B)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="18%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="stretch" br><Cell /></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                HPV {showFullName ? '(Human papilloma virus)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="18%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell filled /></Column>
                <Column width="stretch" br><Cell /></Column>
              </Row>
            </Column>
          </Row>

          <Row bb>
            <Column width={vaccineColumnWidth} bl>
              <Cell align="right">
                Tdap {showFullName ? '(Tetanus, Diphtheria, Pertussis)' : ''}
              </Cell>
            </Column>

            <Column width="stretch" bl>
              <Row>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="18%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="9%" br><Cell /></Column>
                <Column width="stretch" br><Cell filled /></Column>
              </Row>
            </Column>
          </Row>
        </Block>

        <Text>Every fall, starting at 6 month, children are additionally scheduled for an Influenza vaccine (QIV, QLAIV)</Text>
      </Box>
    </Wrapper>
  )
}

export default connect(
  state => {
    return {
      layout: state.ui.layout
    }
  }
)(CustomPageSchedule)
