/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type AcceptGovernor = ContractEventLog<{
  governor: string;
  0: string;
}>;
export type AddBank = ContractEventLog<{
  token: string;
  cToken: string;
  0: string;
  1: string;
}>;
export type Borrow = ContractEventLog<{
  positionId: string;
  caller: string;
  token: string;
  amount: string;
  share: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type Liquidate = ContractEventLog<{
  positionId: string;
  liquidator: string;
  debtToken: string;
  amount: string;
  share: string;
  bounty: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type PutCollateral = ContractEventLog<{
  positionId: string;
  caller: string;
  token: string;
  id: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type Repay = ContractEventLog<{
  positionId: string;
  caller: string;
  token: string;
  amount: string;
  share: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type SetFeeBps = ContractEventLog<{
  feeBps: string;
  0: string;
}>;
export type SetGovernor = ContractEventLog<{
  governor: string;
  0: string;
}>;
export type SetOracle = ContractEventLog<{
  oracle: string;
  0: string;
}>;
export type SetPendingGovernor = ContractEventLog<{
  pendingGovernor: string;
  0: string;
}>;
export type TakeCollateral = ContractEventLog<{
  positionId: string;
  caller: string;
  token: string;
  id: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type WithdrawReserve = ContractEventLog<{
  user: string;
  token: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;

export interface HomoraBank extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): HomoraBank;
  clone(): HomoraBank;
  methods: {
    EXECUTOR(): NonPayableTransactionObject<string>;

    POSITION_ID(): NonPayableTransactionObject<string>;

    SPELL(): NonPayableTransactionObject<string>;

    _GENERAL_LOCK(): NonPayableTransactionObject<string>;

    _IN_EXEC_LOCK(): NonPayableTransactionObject<string>;

    acceptGovernor(): NonPayableTransactionObject<void>;

    accrue(token: string): NonPayableTransactionObject<void>;

    accrueAll(tokens: string[]): NonPayableTransactionObject<void>;

    addBank(token: string, cToken: string): NonPayableTransactionObject<void>;

    allBanks(arg0: number | string | BN): NonPayableTransactionObject<string>;

    allowBorrowStatus(): NonPayableTransactionObject<boolean>;

    allowContractCalls(): NonPayableTransactionObject<boolean>;

    allowRepayStatus(): NonPayableTransactionObject<boolean>;

    bankStatus(): NonPayableTransactionObject<string>;

    banks(arg0: string): NonPayableTransactionObject<{
      isListed: boolean;
      index: string;
      cToken: string;
      reserve: string;
      totalDebt: string;
      totalShare: string;
      0: boolean;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;

    borrow(
      token: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    borrowBalanceCurrent(
      positionId: number | string | BN,
      token: string
    ): NonPayableTransactionObject<string>;

    borrowBalanceStored(
      positionId: number | string | BN,
      token: string
    ): NonPayableTransactionObject<string>;

    cTokenInBank(arg0: string): NonPayableTransactionObject<boolean>;

    caster(): NonPayableTransactionObject<string>;

    execute(
      positionId: number | string | BN,
      spell: string,
      data: string | number[]
    ): PayableTransactionObject<string>;

    feeBps(): NonPayableTransactionObject<string>;

    getBankInfo(token: string): NonPayableTransactionObject<{
      isListed: boolean;
      cToken: string;
      reserve: string;
      totalDebt: string;
      totalShare: string;
      0: boolean;
      1: string;
      2: string;
      3: string;
      4: string;
    }>;

    getBorrowCELOValue(
      positionId: number | string | BN
    ): NonPayableTransactionObject<string>;

    getCollateralCELOValue(
      positionId: number | string | BN
    ): NonPayableTransactionObject<string>;

    getCurrentPositionInfo(): NonPayableTransactionObject<{
      owner: string;
      collToken: string;
      collId: string;
      collateralSize: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    getPositionDebtShareOf(
      positionId: number | string | BN,
      token: string
    ): NonPayableTransactionObject<string>;

    getPositionDebts(
      positionId: number | string | BN
    ): NonPayableTransactionObject<{
      tokens: string[];
      debts: string[];
      0: string[];
      1: string[];
    }>;

    getPositionInfo(
      positionId: number | string | BN
    ): NonPayableTransactionObject<{
      owner: string;
      collToken: string;
      collId: string;
      collateralSize: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    governor(): NonPayableTransactionObject<string>;

    initialize(
      _oracle: string,
      _feeBps: number | string | BN
    ): NonPayableTransactionObject<void>;

    liquidate(
      positionId: number | string | BN,
      debtToken: string,
      amountCall: number | string | BN
    ): NonPayableTransactionObject<void>;

    nextPositionId(): NonPayableTransactionObject<string>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: (number | string | BN)[],
      arg3: (number | string | BN)[],
      arg4: string | number[]
    ): NonPayableTransactionObject<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: number | string | BN,
      arg3: number | string | BN,
      arg4: string | number[]
    ): NonPayableTransactionObject<string>;

    oracle(): NonPayableTransactionObject<string>;

    pendingGovernor(): NonPayableTransactionObject<string>;

    positions(arg0: number | string | BN): NonPayableTransactionObject<{
      owner: string;
      collToken: string;
      collId: string;
      collateralSize: string;
      debtMap: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    }>;

    putCollateral(
      collToken: string,
      collId: number | string | BN,
      amountCall: number | string | BN
    ): NonPayableTransactionObject<void>;

    repay(
      token: string,
      amountCall: number | string | BN
    ): NonPayableTransactionObject<void>;

    setAllowContractCalls(ok: boolean): NonPayableTransactionObject<void>;

    setBankStatus(
      _bankStatus: number | string | BN
    ): NonPayableTransactionObject<void>;

    setFeeBps(_feeBps: number | string | BN): NonPayableTransactionObject<void>;

    setOracle(_oracle: string): NonPayableTransactionObject<void>;

    setPendingGovernor(
      _pendingGovernor: string
    ): NonPayableTransactionObject<void>;

    setWhitelistSpells(
      spells: string[],
      statuses: boolean[]
    ): NonPayableTransactionObject<void>;

    setWhitelistTokens(
      tokens: string[],
      statuses: boolean[]
    ): NonPayableTransactionObject<void>;

    setWhitelistUsers(
      users: string[],
      statuses: boolean[]
    ): NonPayableTransactionObject<void>;

    support(token: string): NonPayableTransactionObject<boolean>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    takeCollateral(
      collToken: string,
      collId: number | string | BN,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    transmit(
      token: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    whitelistedSpells(arg0: string): NonPayableTransactionObject<boolean>;

    whitelistedTokens(arg0: string): NonPayableTransactionObject<boolean>;

    whitelistedUsers(arg0: string): NonPayableTransactionObject<boolean>;

    withdrawReserve(
      token: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    AcceptGovernor(cb?: Callback<AcceptGovernor>): EventEmitter;
    AcceptGovernor(
      options?: EventOptions,
      cb?: Callback<AcceptGovernor>
    ): EventEmitter;

    AddBank(cb?: Callback<AddBank>): EventEmitter;
    AddBank(options?: EventOptions, cb?: Callback<AddBank>): EventEmitter;

    Borrow(cb?: Callback<Borrow>): EventEmitter;
    Borrow(options?: EventOptions, cb?: Callback<Borrow>): EventEmitter;

    Liquidate(cb?: Callback<Liquidate>): EventEmitter;
    Liquidate(options?: EventOptions, cb?: Callback<Liquidate>): EventEmitter;

    PutCollateral(cb?: Callback<PutCollateral>): EventEmitter;
    PutCollateral(
      options?: EventOptions,
      cb?: Callback<PutCollateral>
    ): EventEmitter;

    Repay(cb?: Callback<Repay>): EventEmitter;
    Repay(options?: EventOptions, cb?: Callback<Repay>): EventEmitter;

    SetFeeBps(cb?: Callback<SetFeeBps>): EventEmitter;
    SetFeeBps(options?: EventOptions, cb?: Callback<SetFeeBps>): EventEmitter;

    SetGovernor(cb?: Callback<SetGovernor>): EventEmitter;
    SetGovernor(
      options?: EventOptions,
      cb?: Callback<SetGovernor>
    ): EventEmitter;

    SetOracle(cb?: Callback<SetOracle>): EventEmitter;
    SetOracle(options?: EventOptions, cb?: Callback<SetOracle>): EventEmitter;

    SetPendingGovernor(cb?: Callback<SetPendingGovernor>): EventEmitter;
    SetPendingGovernor(
      options?: EventOptions,
      cb?: Callback<SetPendingGovernor>
    ): EventEmitter;

    TakeCollateral(cb?: Callback<TakeCollateral>): EventEmitter;
    TakeCollateral(
      options?: EventOptions,
      cb?: Callback<TakeCollateral>
    ): EventEmitter;

    WithdrawReserve(cb?: Callback<WithdrawReserve>): EventEmitter;
    WithdrawReserve(
      options?: EventOptions,
      cb?: Callback<WithdrawReserve>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AcceptGovernor", cb: Callback<AcceptGovernor>): void;
  once(
    event: "AcceptGovernor",
    options: EventOptions,
    cb: Callback<AcceptGovernor>
  ): void;

  once(event: "AddBank", cb: Callback<AddBank>): void;
  once(event: "AddBank", options: EventOptions, cb: Callback<AddBank>): void;

  once(event: "Borrow", cb: Callback<Borrow>): void;
  once(event: "Borrow", options: EventOptions, cb: Callback<Borrow>): void;

  once(event: "Liquidate", cb: Callback<Liquidate>): void;
  once(
    event: "Liquidate",
    options: EventOptions,
    cb: Callback<Liquidate>
  ): void;

  once(event: "PutCollateral", cb: Callback<PutCollateral>): void;
  once(
    event: "PutCollateral",
    options: EventOptions,
    cb: Callback<PutCollateral>
  ): void;

  once(event: "Repay", cb: Callback<Repay>): void;
  once(event: "Repay", options: EventOptions, cb: Callback<Repay>): void;

  once(event: "SetFeeBps", cb: Callback<SetFeeBps>): void;
  once(
    event: "SetFeeBps",
    options: EventOptions,
    cb: Callback<SetFeeBps>
  ): void;

  once(event: "SetGovernor", cb: Callback<SetGovernor>): void;
  once(
    event: "SetGovernor",
    options: EventOptions,
    cb: Callback<SetGovernor>
  ): void;

  once(event: "SetOracle", cb: Callback<SetOracle>): void;
  once(
    event: "SetOracle",
    options: EventOptions,
    cb: Callback<SetOracle>
  ): void;

  once(event: "SetPendingGovernor", cb: Callback<SetPendingGovernor>): void;
  once(
    event: "SetPendingGovernor",
    options: EventOptions,
    cb: Callback<SetPendingGovernor>
  ): void;

  once(event: "TakeCollateral", cb: Callback<TakeCollateral>): void;
  once(
    event: "TakeCollateral",
    options: EventOptions,
    cb: Callback<TakeCollateral>
  ): void;

  once(event: "WithdrawReserve", cb: Callback<WithdrawReserve>): void;
  once(
    event: "WithdrawReserve",
    options: EventOptions,
    cb: Callback<WithdrawReserve>
  ): void;
}