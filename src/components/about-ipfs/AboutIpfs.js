import React from 'react'
import { translate, Trans } from 'react-i18next'
import Box from '../box/Box'

export const AboutIpfs = ({ t }) => {
  return (
    <Box>
      <h1 className='mt0 mb3 montserrat fw4 f4 charcoal'>{t('aboutIpfs.header')}</h1>
      <Trans i18nKey='aboutIpfs.paragraph1'>
        <p className='mt0'><strong>BTFS is a protocol</strong> that defines a content-addressed file system, coordinates content delivery and combines ideas from Kademlia, BitTorrent, Git and more.</p>
      </Trans>
      <Trans i18nKey='aboutIpfs.paragraph2'>
        <p><strong>BTFS is a filesystem.</strong> It has directories and files and mountable filesystem via FUSE.</p>
      </Trans>
      <Trans i18nKey='aboutIpfs.paragraph4'>
        <p><strong>BTFS is p2p.</strong> It supports worldwide peer-to-peer file transfers with a completely decentralized architecture and no central point of failure.</p>
      </Trans>
      <Trans i18nKey='aboutIpfs.paragraph5'>
        <p><strong>BTFS is a CDN.</strong> Add a file to your local repository, and it's now available to the world with cache-friendly content-hash addressing and bittorrent-like bandwidth distribution.</p>
      </Trans>
    </Box>
  )
}

export default translate('welcome')(AboutIpfs)
