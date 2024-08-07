import GoToBtn from '../../components/shared/GoToBtn'
import {
    updateCoffeeInitialValue,
    updateCoffeeValidationSchema,
    updateCoffeeHandleSubmit,
} from '../../scripts/formValidation'
import CoffeeForm from '../../components/CoffeeForm/CoffeeForm'

function UpdateCoffee() {
    return (
        <div className="container">
            <div className="mt-10 text-3xl">
                <GoToBtn />
            </div>
            <div className="mb-32 mt-12 bg-anti-flash-white px-32 py-16">
                <div className="mb-8 text-center">
                    <h1 className="mb-8 text-center font-display text-5xl text-charcoal [text-shadow:_0px_0px_9px_rgba(55,65,81,0.8)]">
                        Update Existing Coffee Details
                    </h1>
                    <p className="text-xl text-eerie-black text-opacity-70">
                        It is a long established fact that a reader will be
                        distraceted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                </div>
                {/* Form */}
                <div>
                    <CoffeeForm
                        coffeeInitialValue={updateCoffeeInitialValue}
                        coffeeValidationSchema={updateCoffeeValidationSchema}
                        coffeeHandleSubmit={updateCoffeeHandleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default UpdateCoffee
