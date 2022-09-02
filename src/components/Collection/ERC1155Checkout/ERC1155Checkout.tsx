import { FC } from 'react';
import { NFTContractType } from '../../../types/HyperMint/IContract';
import TokenCard from '../../Token/TokenCard';
import styles from './ERC1155Checkout.module.scss';

interface IERC1155Checkout {
    tokens: any[];
    publicSaleLive: boolean;
}

const ERC1155Checkout: FC<IERC1155Checkout> = ({ tokens, publicSaleLive }) => {
    return (
        <section className={styles.grid}>
            {tokens.map((token) => (
                <TokenCard
                    publicSaleLive={publicSaleLive}
                    token={{
                        ...token,
                        type: NFTContractType.ERC1155
                    }}
                />
            ))}
        </section>
    );
};

export default ERC1155Checkout;