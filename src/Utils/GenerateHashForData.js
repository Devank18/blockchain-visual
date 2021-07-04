import sha256 from 'crypto-js/sha256';

export default function GenerateHashForData(data, nonce) {
  return sha256(nonce + data);
}
