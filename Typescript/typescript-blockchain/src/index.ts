import * as CryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }

  static caculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string =>
    CryptoJS.SHA256(index + previousHash + data + timestamp).toString();

  static validateStructure = (aBlock: Block): Boolean =>
    typeof aBlock.index === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.previousHash === 'string' &&
    typeof aBlock.data === 'string' &&
    typeof aBlock.timestamp === 'number';
}

const genesisBlock: Block = new Block(0, '1231266662123', '', 'Hi', 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const nextTimeStamp: number = getNewTimeStamp();
  const nextHash: string = Block.caculateBlockHash(
    newIndex,
    previousBlock.hash,
    data,
    nextTimeStamp
  );
  const newBlock: Block = new Block(
    newIndex,
    nextHash,
    previousBlock.hash,
    data,
    nextTimeStamp
  );

  addBolcok(newBlock);

  return newBlock;
};

const getHashforBlock = (aBlock: Block): string =>
  Block.caculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.data,
    aBlock.timestamp
  );

const isBlockValid = (
  candidateBolock: Block,
  previousBlock: Block
): boolean => {
  if (!Block.validateStructure(candidateBolock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBolock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBolock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBolock) !== candidateBolock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBolcok = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock('secondBlock');
createNewBlock('thirdBlock');
createNewBlock('fourthBlock');

console.log(blockchain);

export {};
