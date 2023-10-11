import {View, Text} from 'react-native'
import{useForm, Controller} from 'react-hook-form'
import { TextInput, Button } from 'react-native-paper';
export default function HomeScreen({navigation, route}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      iduser:"",
      fullName: "",
      email: "",
      password:"",
      uri:"",
      age:""
    },
  })
  const onSubmit = (data) => console.log(data);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenid@ {route.params.email}</Text>
        <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 12,
          minLength: 4,
          pattern: /^[0-9]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Identificacion"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="iduser"
      />
      {errors.iduser ?.type == "required" && <Text style={{color : 'red'}}>Id es un Dato obligatorio.</Text>}
      {errors.iduser ?.type == "maxLength" && <Text style={{color: 'red'}}>La longitud debe ser hasta 12</Text>}
      {errors.iduser ?.type == "minlength" && <Text style={{color: 'red'}}>La longitud minima debe de ser 4</Text>}
      {errors.iduser ?.type == "pattern" && <Text style={{color: 'red'}}>Debe ingresar solo numeros</Text>}

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}

        {/* Control del nombre completo /> */}

        
        <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 30,
          minLength: 3,
          pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{marginTop: 10}}
            label="Nombre completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullName ?.type == "required" && <Text style={{color : 'red'}}>Digite solo letras y espacios.</Text>}
      {errors.fullName ?.type == "maxLength" && <Text style={{color: 'red'}}>La longitud maxima debe ser de 30 caracteres</Text>}
      {errors.fullName ?.type == "minlength" && <Text style={{color: 'red'}}>La longitud minima debe de ser 3 caracteres</Text>}
      {errors.fullName ?.type == "pattern" && <Text style={{color: 'red'}}>Debe ingresar solo letras /o espacios</Text>}

      {/* Control del correo  /> */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 15,
          minLength: 8,
          pattern:  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Correo electronico"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email ?.type == "required" && <Text style={{color : 'red'}}>El correo es un dato obligatorio.</Text>}
      {errors.email ?.type == "maxLength" && <Text style={{color: 'red'}}>La longitud no debe ser mas de 15</Text>}
      {errors.email ?.type == "minlength" && <Text style={{color: 'red'}}>La longitud minima debe de ser 8</Text>}
      {errors.email ?.type == "pattern" && <Text style={{color: 'red'}}>Debe ingresar mas caracteres especiales</Text>}

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}

      {/* Control del correo  /> */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 15,
          minLength: 8,
          pattern:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password ?.type == "required" && <Text style={{color : 'red'}}>La contraseña es obligatoria.</Text>}
      {errors.password ?.type == "maxLength" && <Text style={{color: 'red'}}>La longitud no debe ser mayor a 15</Text>}
      {errors.password ?.type == "minlength" && <Text style={{color: 'red'}}>La longitud minima debe de ser 6</Text>}
      {errors.password ?.type == "pattern" && <Text style={{color: 'red'}}>Debe ingresar letras, numeros, caracteres especiales</Text>}

      {/* Control de la uri /> */}

      <Controller
        control={control}
        rules={{
          required: true,
          // maxLength: 15,
          minLength: 16,
          pattern:  /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Direccion del dominio"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="uri"
      />
      {errors.uri ?.type == "required" && <Text style={{color : 'red'}}>La direccion del dominio.</Text>}
      {/* {errors.uri ?.type == "maxLength" && <Text style={{color: 'red'}}>La longitud no debe ser mayor a 15</Text>} */}
      {errors.uri ?.type == "minlength" && <Text style={{color: 'red'}}>La longitud minima debe de ser 16</Text>}
      {errors.uri ?.type == "pattern" && <Text style={{color: 'red'}}>Debe ingresar letras, numeros, caracteres especiales</Text>}

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}

      {/* Control de la uri /> */}

      <Controller
        control={control}
        rules={{
          required: true,
          // maxLength: 15,
          minLength: 16,
          pattern:  /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Edad"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="age"
      />
      {errors.uri ?.type == "required" && <Text style={{color : 'red'}}>La direccion del dominio.</Text>}
      {errors.uri ?.type == "maxLength" && <Text style={{color: 'red'}}>La longitud no debe ser mayor a 15</Text>}
      {errors.uri ?.type == "minlength" && <Text style={{color: 'red'}}>La longitud minima debe de ser 16</Text>}
      {errors.uri ?.type == "pattern" && <Text style={{color: 'red'}}>Debe ingresar letras, numeros, caracteres especiales</Text>}

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}

      <Button
                    style={{ marginTop: 20, backgroundColor: 'powder' }}
                    icon="content-save-check"
                    mode="outlined"
                    onPress={handleSubmit(onSubmit)}
                >
                    Guardar
                </Button>
      
      
      </View>
    );
      
    
        }