# node-entity-port: API Reference

**Warning !** Work in progress...

## Classes

<dl>
<dt><a href="#PortEntityError">PortEntityError</a></dt>
<dd><p>This file is part of node-entity-port</p>
<p>Copyright (c) 2018 SAS 9 Février.</p>
<p>Distributed under the MIT License (license terms are at <a href="http://opensource.org/licenses/MIT">http://opensource.org/licenses/MIT</a>).</p>
</dd>
<dt><a href="#PortEntity">PortEntity</a></dt>
<dd><p>An entity to manage network communications port.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#_">_</a></dt>
<dd><p>This file is part of node-entity-port</p>
<p>Copyright (c) 2018 SAS 9 Février.</p>
<p>Distributed under the MIT License (license terms are at <a href="http://opensource.org/licenses/MIT">http://opensource.org/licenses/MIT</a>).</p>
</dd>
</dl>

<a name="PortEntityError"></a>

## PortEntityError
This file is part of node-entity-port

Copyright (c) 2018 SAS 9 Février.

Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).

**Kind**: global class  
<a name="PortEntity"></a>

## PortEntity
An entity to manage network communications port.

**Kind**: global class  

* [PortEntity](#PortEntity)
    * [new PortEntity(value)](#new_PortEntity_new)
    * _instance_
        * [.validate()](#PortEntity+validate) ⇒ <code>Object</code>
    * _static_
        * [.checkParameters(value)](#PortEntity.checkParameters)
        * [.getPortValidator(value)](#PortEntity.getPortValidator) ⇒ <code>\*</code>
        * [.factory(value)](#PortEntity.factory) ⇒ [<code>PortEntity</code>](#PortEntity)

<a name="new_PortEntity_new"></a>

### new PortEntity(value)
Create a new instance of {PortEntity}.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> \| <code>PortValidator</code> | The port number. |

<a name="PortEntity+validate"></a>

### portEntity.validate() ⇒ <code>Object</code>
Validate the port using {PortValidator}.

**Kind**: instance method of [<code>PortEntity</code>](#PortEntity)  
<a name="PortEntity.checkParameters"></a>

### PortEntity.checkParameters(value)
Check type of the provided parameter(s).

**Kind**: static method of [<code>PortEntity</code>](#PortEntity)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> \| <code>PortValidator</code> | The port number. |

<a name="PortEntity.getPortValidator"></a>

### PortEntity.getPortValidator(value) ⇒ <code>\*</code>
Auto-convert the provided value to a {PortValidator} instance.

**Kind**: static method of [<code>PortEntity</code>](#PortEntity)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="PortEntity.factory"></a>

### PortEntity.factory(value) ⇒ [<code>PortEntity</code>](#PortEntity)
A factory static method to create a new instance of {PortEntity}.

**Kind**: static method of [<code>PortEntity</code>](#PortEntity)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>PortValidator</code> | If {string|number}: a port number. An instance of {PortValidator} else. |

<a name="_"></a>

## _
This file is part of node-entity-port

Copyright (c) 2018 SAS 9 Février.

Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).

**Kind**: global constant  

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 SAS 9 Février
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
