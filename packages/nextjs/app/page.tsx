"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">DApp de prueba</span>
            <span className="block text-4xl font-bold">TETI</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Direccion:</p>
            <Address address={connectedAddress} />
          </div>
          <p className="text-center text-lg">
            Valor de ETH: <b>{nativeCurrencyPrice.toFixed(2)} USD</b>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                <Link href="/blockexplorer" passHref className="link">
                  Historial de Transacciones
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
