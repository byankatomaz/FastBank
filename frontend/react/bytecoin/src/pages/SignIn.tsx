import { Header, Button } from "components";
import { LoginCliente } from "interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClienteService } from "services";
import { ClienteLoginResolver } from "validations";
import { useAuth } from "context";
import { useNavigate } from "react-router-dom";
import ampulheta from "../images/ampulheta.jpg"
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


export function SignIn() {
    const { register, handleSubmit } = useForm({
        resolver: ClienteLoginResolver,
    });

    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    const navigate = useNavigate();
    const { setAccessToken } = useAuth();

    const onSubmit: SubmitHandler<LoginCliente> = async (values) => {
        try {
            const { status, data } = await ClienteService.loginClient(values);

            if (status === 200 && data['access']) {
                setAccessToken(data['access']);
                localStorage.setItem('accessToken', data['access']);
                navigate('/homecliente');
            }
        } catch (error) {
            setOpen(true)
            console.error('Erro ao logar o cliente:', error);
        }
    };

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Deactivate account
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Are you sure you want to deactivate your account? All of your data will be permanently
                                                        removed. This action cannot be undone.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        >
                                            Deactivate
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <div className="w-full lg:w-12/12 bg-black lg:flex flex items-center justify-center">
                <div className="min-h-screen flex items-stretch text-white">
                    <div className="lg:flex hidden bg-gray-500 bg-no-repeat relative bg-cover  items-center" style={{ backgroundImage: `url(${ampulheta})` }}>
                        <div className="absolute bg-black opacity-60 h-full inset-0 z-0"></div>
                        <div className="w-full px-24 z-10">
                            <h1 className="text-5xl font-bold text-left tracking-wide">Estamos felizes de te ver novamente</h1>
                        </div>
                    </div>
                    <div className="max-w-md w-full p-16 flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-semibold text-white text-center">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="mb-4">
                                <label htmlFor="email" className="text-white">Email</label>
                                <input {...register("email")} type="email" id="email" placeholder="Endereço de Email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="text-white">Password</label>
                                <input {...register("password")} type="password" id="password" placeholder="Senha" />
                            </div>
                            <div className="flex justify-center">
                                <Button type="submit" variant="dark" className="w-20 h-12 rounded">Logar</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Header enable={false} />
        </>
    );
}
