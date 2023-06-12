import React from "react"
import {Card, Text, Label, Box} from '@sanity/ui'

export const CardPreview = (value) => {
  const cardTone = {
    risk: 'critical',
    recommendation: 'primary'
  }

  const typeMap = {
    risk: {
      tone: 'critical',
      icon: '⚠️',
      label: 'Risiko'
    },
    recommendation: {
      tone: 'primary',
      icon: '🐟',
      label: 'Anbefaling'
    }
  }

  const type = typeMap[value.type]

  return (
      <Card padding={4}  tone={type.tone} radius={3}>
        <Box marginBottom={4}>
          <Label size={2}>
            {type.icon} {type.label}
          </Label>
        </Box>
        <Text size={2}> 
          {value.text}
        </Text>        
      </Card>
  )
}