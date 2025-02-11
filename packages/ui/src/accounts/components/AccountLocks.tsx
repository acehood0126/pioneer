import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { BalanceLock, LockType } from '@/accounts/types'
import { QuestionIcon } from '@/common/components/icons'
import {
  DistributionWorkerIcon,
  InvitationIcon,
  MarketingWorkerIcon,
  HRWorkerIcon,
  LockIcon,
  VoteIcon,
  StorageWorkerIcon,
  ProposalIcon,
  CouncilCandidateIcon,
  ForumWorkerIcon,
  BountiesIcon,
  ValidationIcon,
  ContentDirectoryWorkerIcon,
  BoundStakingIcon,
  CouncilorIcon,
  BuilderWorkerIcon,
  GatewayWorkerIcon,
  MembershipWorkerIcon,
} from '@/common/components/icons/locks'
import { ColumnGapBlock } from '@/common/components/page/PageContent'

const locksMap: Record<LockType, ReactElement> = {
  Staking: <LockIcon />,
  Vesting: <LockIcon />,
  Voting: <VoteIcon />,
  'Council Candidate': <CouncilCandidateIcon />,
  Councilor: <CouncilorIcon />,
  Validation: <ValidationIcon />,
  Nomination: <ValidationIcon />,
  Proposals: <ProposalIcon />,
  'Storage Worker': <StorageWorkerIcon />,
  'Content Directory Worker': <ContentDirectoryWorkerIcon />,
  'Forum Worker': <ForumWorkerIcon />,
  'Membership Worker': <MembershipWorkerIcon />,
  Invitation: <InvitationIcon />,
  'Bound Staking Account': <BoundStakingIcon />,
  Bounties: <BountiesIcon />,
  'Gateway Worker': <GatewayWorkerIcon />,
  'Builders Worker': <BuilderWorkerIcon />,
  'HR Worker': <HRWorkerIcon />,
  'Marketing Worker': <MarketingWorkerIcon />,
  'Distribution Worker': <DistributionWorkerIcon />,
}

export const lockIcon = (type: LockType) => locksMap[type] ?? <QuestionIcon />

export interface AccountLocksProps {
  locks?: BalanceLock[]
}

export const AccountLocks = ({ locks }: AccountLocksProps) => {
  if (!locks?.length) {
    return null
  }

  return (
    <AccountLocksWrapper gap={4}>
      {locks.map((lock, index) => (
        <AccountLockIconWrapper key={index} title={lock.type ?? 'Unknown lock'}>
          {lockIcon(lock.type)}
        </AccountLockIconWrapper>
      ))}
    </AccountLocksWrapper>
  )
}

export const AccountLocksWrapper = styled(ColumnGapBlock)`
  position: absolute;
  top: 15px;
  align-items: center;
`

const AccountLockIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`
